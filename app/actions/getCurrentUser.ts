import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";

const getCurrentUser = async () => {
  try {
    const session = await getSession();
    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error: any) {
    /* we don't want to throw any error because that's going to break the app
    (this is not an API route but a server action) */
    return null;
  }
};

export default getCurrentUser;
