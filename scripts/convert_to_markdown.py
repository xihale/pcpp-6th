#!/usr/bin/env python3
"""
Usage: python convert_to_markdown.py [input_dir] [output_dir]
"""

from bs4 import BeautifulSoup
import markdownify
import re
import os


def html_to_markdown(html_content):
    return markdownify.markdownify(
        html_content,
        heading_style="ATX",
        bullets="-",
        strong_em_symbol="*",
        strip=['script', 'style'],
        wrap_code=False,
        code_language_callback=lambda _: 'cpp'
    )


def convert_xhtml_to_markdown(input_file, output_file):
    """Convert XHTML to Markdown with simplified processing"""
    with open(input_file, 'r', encoding='utf-8') as f:
        soup = BeautifulSoup(f.read(), 'html.parser')

    # Process .xhtml links to convert to ../filename format
    for a_tag in soup.find_all('a', href=True):
        href = a_tag['href']
        if href.endswith('.xhtml'):
            # Remove .xhtml extension and add ../ prefix
            new_href = '../' + href[:-6]  # Remove .xhtml (6 characters)
            a_tag['href'] = new_href

    # Extract title with priority: appendixTitle > chapterTitle > title
    title = ''
    for cls in ['appendixTitle', 'chapterTitle', 'title']:
        element = soup.find('span', class_=cls)
        if element:
            title = element.get_text().strip()
            break

    # Remove heading
    chapter_heading = soup.find('h1')
    if chapter_heading:
        chapter_heading.decompose()

    # Handle note references
    for ref in soup.find_all('a', attrs={'role': 'doc-noteref'}):
        sup = ref.find('sup')
        if sup:
            ref.replace_with(f'[^{sup.get_text()}]')

    # Process backlinks in note entries - convert to markdown footnotes
    for ol in soup.find_all('ol', class_='notesList'):
        # Collect all note entries
        footnotes = []
        for li in ol.find_all('li', class_='noteEntry'):
            backlink = li.find('a', attrs={'role': 'doc-backlink'})
            if backlink:
                note_number = backlink.get_text().strip()
                backlink.decompose()  # Remove the backlink itself
                note_text = li.get_text().strip().replace('\xa0', '')
                footnotes.append(f'[^{note_number}]: {note_text}')
        # Replace the entire ol with formatted footnotes
        ol.replace_with('\n'.join(footnotes) + '\n')

    # Process other backlinks (like figures) - remove mysterious characters after them
    for ref in soup.find_all('a', attrs={'role': 'doc-backlink'}):
        if ref.find_parent('ol'):  # Skip if already processed
            continue
        parent = ref.parent
        ref.replace_with(f'[^{ref.get_text()}]')

        if parent:
            cleaned_text = parent.get_text().replace('\xa0', ': ')
            parent.string = cleaned_text


    # Process feature1 blocks (NOTE/WARNING/TIP etc) - BEFORE standalone paragraphs
    for aside in soup.find_all('aside'):
        section = aside.find('section', class_='feature1')
        if section:
            p = section.find('p')
            if p:
                b = p.find('b')
                if b and '\u2003' in p.get_text():
                    block_type = b.get_text().strip().lower()
                    if block_type in ['note', 'warning', 'tip', 'error', 'caution', 'important', 'info']:
                        # Remove the NOTE title
                        b.decompose()
                        # Extract and convert the paragraph content
                        content_md = html_to_markdown(str(p))
                        # Clean up: remove EM spaces, italic formatting, and normalize whitespace
                        import re
                        content_md = content_md.replace('\u2003', ' ')
                        content_md = re.sub(r'\*([^*]*)\*', r'\1', content_md)  # Remove italic formatting
                        content_md = re.sub(r'\s+', ' ', content_md).strip()
                        aside.replace_with(f':::{block_type}\n{content_md}\n:::\n')

    # Process information blocks (standalone, not in feature1 sections)
    for p in soup.find_all('p'):
        # Skip if this paragraph is inside an already processed feature1 section
        if p.find_parent('section', class_='feature1'):
            continue

        b, i = p.find('b'), p.find('i')
        if b and i and '\u2003' in p.get_text():
            block_type = b.get_text().strip().lower()
            if block_type in ['note', 'warning', 'tip', 'error', 'caution', 'important', 'info']:
                p.replace_with(f':::{block_type}\n{i.get_text().strip()}\n:::\n')

    # Process feature3 blocks
    for aside in soup.find_all('aside'):
        section = aside.find('section', class_='feature3')
        if section:
            heading = section.find(['h2', 'h3'])
            if heading:
                f3_title = heading.get_text().strip()
                heading.decompose()
                for hr in aside.find_all('div', class_='hr'):
                    hr.decompose()
                # Convert section content to markdown first, then wrap in tip block
                content_html = str(section).strip()
                content_md = html_to_markdown(content_html)
                aside.replace_with(f':::tip[{f3_title}]\n{content_md}\n:::\n')

    # Clean up unwanted elements
    for element in soup(['script', 'style', 'hr']):
        element.decompose()

    for img in soup.find_all('img', alt='C++23'):
        img.replace_with('<cpp23></cpp23>')

    # for text in soup.find_all(string=lambda t: t and '[#Page_' in t):
    #     text.extract()

    # Convert to markdown using the reusable function
    markdown = html_to_markdown(str(soup.body))

    # Post-process to fix escaped underscores in code blocks
    import re
    # Replace escaped underscores within backtick code blocks
    markdown = re.sub(r'`([^`]*)\\_([^`]*)`', r'`\1_\2`', markdown)

    # Post-process and add front matter
    if title:
        front_matter = f'---\ntitle: "{title}"\n---\n\n'
        markdown = front_matter + markdown

    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(markdown + '\n')

    print(f"Conversion completed: {input_file} → {output_file}")
    return True


def main():
    import sys
    import glob

    input_dir = sys.argv[1] if len(sys.argv) > 1 else '.'
    output_dir = sys.argv[2] if len(sys.argv) > 2 else '.'

    if not os.path.exists(input_dir):
        print(f"Error: Directory '{input_dir}' not found")
        return

    if not os.path.exists(output_dir):
        os.makedirs(output_dir, exist_ok=True)

    # Find all XHTML files in the input directory
    xhtml_files = glob.glob(os.path.join(input_dir, '*.xhtml'))

    if not xhtml_files:
        print(f"No XHTML files found in directory '{input_dir}'")
        return

    print(f"Found {len(xhtml_files)} XHTML files to process...")

    converted_count = 0
    for xhtml_file in xhtml_files:
        filename = os.path.basename(xhtml_file)
        output_file = os.path.join(output_dir, filename.replace('.xhtml', '.md'))

        try:
            convert_xhtml_to_markdown(xhtml_file, output_file)
            converted_count += 1
        except Exception as e:
            print(f"Error converting {filename}: {e}")

    print(f"Conversion completed: {converted_count}/{len(xhtml_files)} files processed")


if __name__ == "__main__":
    main()
