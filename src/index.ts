import { PrismaClient } from "@prisma/client";
import app from "./app";
const port = process.env.post || 3003;

const prisma = new PrismaClient();

async function main() {
  //   const getAllUsers = await prisma.user.findMany();
  //   console.log(getAllUsers);
  // const postUser = await prisma.user.create({
  //   data: {
  //     email: "musliha5@hero.com",
  //     name: "musliha",
  //     age: 1,
  //   },
  // });

  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
}

main();
