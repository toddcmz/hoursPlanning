
Notes on official development steps for hoursPlanning project

# create the entire next project
npm create-next-app

# linked git repo

# vercel postgres database created "dev_hoursPlanning"

# ran prisma commands 
npm install prisma --save-dev
	# skipped new ts config file, went with strict: true
npx prisma init
	# added full url from vercel into .env

# created test organization table in schema.prisma
# ran command to initialize database - created table
npx prisma db push
	# this worked as expected, table viewable in vercel under data tab

