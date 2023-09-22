# Notes on official development steps for hoursPlanning project

## notes on documentation locations
Changed from trello board to github projects board, created new board for todos

Changed from google drive for design document to documentation folder in root directory

Changed design doc and this readme file to markdown style

## set-up commands and steps taken
```npm create-next-app```

linked git repo

vercel postgres database created "dev_hoursPlanning"

ran prisma commands

```npm install prisma --save-dev```

skipped new ts config file, went with strict: true

```npx prisma init```

added full url from vercel into .env

created test organization table in schema.prisma file
ran command to initialize database - created table

```npx prisma db push```

this worked as expected, table viewable in vercel under storage tab

## Initial Dev Session with Enjay 9/22/2023

created basic placeholder folder and page structure

created universal placeholder navbar

started looking at prisma tables for next steps

used resources at:

https://www.prisma.io/docs/concepts/components/prisma-schema/relations

... to set up primary/fk relationships. requires extra rows in both
tables beyond what I'd intuitively expect just out of SQL experience.

The side that gets the 'relation' line in the model is the one that holds
the foreign key. (the 'many' side). Don't forget to add the extra ```<tableName>[]``` row in the table you're linking to (the 'one' side)

Remember we can investigate our tables in the prisma studio mini application. Access this by running ``` npx prisma studio```

Verified we created three tables out of our schema.prisma file.





