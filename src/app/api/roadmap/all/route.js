import { db } from "@/lib/firebase";
import { query, collection, getDocs } from "firebase/firestore";
import { auth } from "@/app/auth";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const session = await auth();
        if (!session) {
            return NextResponse.json(
                { message: "Unauthorized" },
                { status: 401 }
            );
        }

        const q = query(
            collection(db, "users", session.user.email, "roadmaps")
        );

        const querySnapshot = await getDocs(q);

        const docs = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            courseTitle: doc.data().courseTitle,
            courseDescription: doc.data().courseDescription,
        }));

        return NextResponse.json({ docs });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
