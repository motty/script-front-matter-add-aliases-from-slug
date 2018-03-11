# 📃 Script - Front Matter 📮 Add Aliases from Slug

This simple script will loop through a specified directory adding a [front matter](https://gohugo.io/content-management/front-matter/) [aliases](https://gohugo.io/content-management/urls/#aliases) variable from the `slug` variable value to all Markdown files.

```
slug:
    appears as the tail of the output URL. A value specified in front matter will override the segment of the URL based on the filename.


aliases:
    an array of one or more aliases (e.g., old published paths of renamed content) that will be created in the output directory structure . See Aliases for details.
```

> **Note:** This script is meant to be used with a [Hugo](https://gohugo.io) website.

## ✏️ Prerequisities

This will install [gray-matter](https://github.com/jonschlinkert/gray-matter) the only dependency required.

```bash
npm install
```

## 🏃 Run

```bash
./add-aliases-from-slug.js ../motty.io/content/blog/archive
```

A temporary `tmp` folder will be created with all our modified Markdown files

## 🤔 Why?

We needed to [migrate from Ghost to Hugo](https://github.com/jbarone/ghostToHugo) and keep our old URLs accesibles so we don't lose positioning for that we needed to create an [aliases](https://gohugo.io/content-management/urls/#aliases) variable in each file so Hugo can handle the redirection.

## 👏 Resources

To build this script we use the smarter yaml front matter parser [gray-matter](https://github.com/jonschlinkert/gray-matter)

- [Ghost to Hugo Migration tool](https://github.com/jbarone/ghostToHugo)
- [Front Matter Hugo Documentation](https://gohugo.io/content-management/front-matter/)

Build with ❤️ by 🐘 in the 🌏