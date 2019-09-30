Start the development with Start Template from Bootstrap v4.3.

---
Error parsing XML, line 1, column 3: The markup in the document preceding the root element must be well-formed.
<?xml version="1.0" encoding="UTF-8" ?>

---
Error parsing XML, line 2, column 3: The markup in the document preceding the root element must be well-formed.

Not Accepted
<!doctype html>

Accepted
<!DOCTYPE html>

---
Error parsing XML, line 14, column 3: The element type "link" must be terminated by the matching end-tag "</link>".
Error parsing XML, line 14, column 3: The element type "meta" must be terminated by the matching end-tag "</meta>".
All tags should be ended with "</tagname>" or "/>".

---
There should be one and only one skin in the theme, and we found: 0
<b:skin />

---
We did not find any section in your theme. A theme must have at least one b:section tag.
<b:section />

---
One of the sections is missing the required id attribute. Every section should have a unique id.
<b:section id="unique" />
