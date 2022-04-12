from os import path, makedirs
import re
import markdownify

cwd = path.dirname(path.realpath(__file__))

makedirs(cwd + '/tools', exist_ok=True)
index = open(cwd + "/tools/_index.md", "w")
index.write("""---
title: "Tools to use"
icon: /icons/tools.png
menuicon: /icons/tools-menu.png
date: 2020-07-31T11:05:44+02:00
expandable: false
instructions: true
weight: 2
category: "section"
---""")

tools = open(cwd + "/tools.md", "r")

tools = re.findall(r'({{<\s.*(\s>}})(.|(\n{1}\w+)).*(\n{1}{{<\s\/).+\s>}})', tools.read())

for index, tool in enumerate(tools):
  title = re.search(r'(title="([^"]+)")', str(tool[0])).group(2)
  subtitle = re.search(r'(subtitle="([^"]+)")', str(tool[0])).group(2)
  content = re.search(r'>}}\n(.+)\n{{<', str(tool[0])).group(1)
  print(title)
  
  file = open(cwd + "/tools/" + title.lower().replace(' ', '_') + ".md", "w")
  file.write("""---
title: \"""" + title + """\"
subtitle: \"""" + subtitle + """\"
date: 2020-07-31T11:05:44+02:00
weight: """ + str(index + 1) + """
category: "tool"
---

""" + markdownify.markdownify(content) + """
""")
  