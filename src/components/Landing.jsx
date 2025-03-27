import Link from "next/link";
import {
    ArrowUpRight,
    BookOpen,
    Brain,
    CheckCircle,
    ChevronRight,
    Compass,
    Layers,
    Sparkles,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function Landing() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                <section className="py-10 md:py-12">
                    <div className="container px-4 md:px-6">
                        <div className=" flex justify-center  items-center">
                            <div className="flex flex-col justify-center items-center max-w-2xl space-y-4 text-center">
                                <div className="pr-6">
                                    <Image
                                        src={
                                            "/YUKTHI_LOGO-removebg-preview.png"
                                        }
                                        className="scale-180"
                                        alt="logo"
                                        width={80}
                                        height={80}
                                    ></Image>
                                </div>
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                                    Learn Any Concept with AI-Generated Courses
                                </h1>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                    Our AI-powered platform creates
                                    personalized, chapter-wise courses on any
                                    topic you want to learn. Master new skills
                                    at your own pace with interactive content.
                                </p>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Link href={"/login"}>
                                        <Button size="lg" className="gap-1">
                                            Get Started{" "}
                                            <ArrowUpRight className="h-4 w-4" />
                                        </Button>
                                    </Link>
                                    <Button variant="outline" size="lg">
                                        See Demo
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="features"
                    className="bg-slate-50 dark:bg-slate-900 py-16 md:py-24"
                >
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Why Choose Yukthi?
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Our platform combines cutting-edge AI with
                                    proven learning methodologies to create the
                                    most effective learning experience.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
                            <Card>
                                <CardHeader>
                                    <Sparkles className="h-10 w-10 text-primary mb-2" />
                                    <CardTitle>AI-Powered Generation</CardTitle>
                                    <CardDescription>
                                        Our advanced AI creates comprehensive
                                        courses on any topic in seconds.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <Layers className="h-10 w-10 text-primary mb-2" />
                                    <CardTitle>Chapter-wise Learning</CardTitle>
                                    <CardDescription>
                                        Structured content organized into
                                        logical chapters for better
                                        understanding.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <Compass className="h-10 w-10 text-primary mb-2" />
                                    <CardTitle>Personalized Path</CardTitle>
                                    <CardDescription>
                                        Courses adapt to your learning style,
                                        pace, and existing knowledge.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <BookOpen className="h-10 w-10 text-primary mb-2" />
                                    <CardTitle>Interactive Exercises</CardTitle>
                                    <CardDescription>
                                        Reinforce learning with quizzes,
                                        challenges, and practical exercises.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CheckCircle className="h-10 w-10 text-primary mb-2" />
                                    <CardTitle>Progress Tracking</CardTitle>
                                    <CardDescription>
                                        Monitor your learning journey with
                                        detailed analytics and insights.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <Brain className="h-10 w-10 text-primary mb-2" />
                                    <CardTitle>Any Topic, Any Level</CardTitle>
                                    <CardDescription>
                                        From beginner to advanced, learn
                                        anything you're interested in.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </section>

                <section id="how-it-works" className="py-16 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    How Yukthi Works
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Creating your personalized learning
                                    experience is simple and fast.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl gap-8 mt-12">
                            <div className="grid gap-8 md:grid-cols-4">
                                <div className="flex flex-col items-center text-center">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                                        1
                                    </div>
                                    <h3 className="mt-4 text-xl font-bold">
                                        Enter Your Topic
                                    </h3>
                                    <p className="mt-2 text-muted-foreground">
                                        Simply type in what you want to learn
                                        about, from programming to philosophy.
                                    </p>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                                        2
                                    </div>
                                    <h3 className="mt-4 text-xl font-bold">
                                        AI Generates Roadmap
                                    </h3>
                                    <p className="mt-2 text-muted-foreground">
                                        The AI analyzes the topic and creates a
                                        structured, chapter-wise roadmap
                                        tailored to you.
                                    </p>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                                        3
                                    </div>
                                    <h3 className="mt-4 text-xl font-bold">
                                        AI Generates Chapter Content
                                    </h3>
                                    <p className="mt-2 text-muted-foreground">
                                        The AI analyzes the roadmap and creates
                                        the content of the chapter.
                                    </p>
                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white text-xl font-bold">
                                        4
                                    </div>
                                    <h3 className="mt-4 text-xl font-bold">
                                        Start Learning
                                    </h3>
                                    <p className="mt-2 text-muted-foreground">
                                        Begin your learning journey through
                                        interactive chapters, exercises, and
                                        assessments.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-8 rounded-xl border bg-card p-6 shadow-sm">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold">
                                            Try it now
                                        </h3>
                                        <p className="text-muted-foreground">
                                            Enter a topic you'd like to learn
                                            about and see how Yukthi works.
                                        </p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-2">
                                        <div className="relative flex-1">
                                            <input
                                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                                placeholder="e.g., Machine Learning, Web Development, Digital Marketing..."
                                            />
                                        </div>

                                        <AlertDialog>
                                            <AlertDialogTrigger className="flex bg-foreground text-background items-center border px-2 rounded-md cursor-pointer hover:bg-accent-foreground transition">
                                                Generate Course{" "}
                                                <ChevronRight className="ml-1 h-4 w-4" />
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>
                                                        Login to continue
                                                    </AlertDialogTitle>
                                                    <AlertDialogDescription>
                                                        You must be logged in to
                                                        generate the course,
                                                        login to continue.
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>
                                                        Cancel
                                                    </AlertDialogCancel>
                                                    <AlertDialogAction>
                                                        <Link href={"/login"}>
                                                            Login{" "}
                                                        </Link>
                                                    </AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-slate-50 dark:bg-slate-900 py-16 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    What Our Users Say
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Join thousands of satisfied learners who
                                    have transformed their knowledge with
                                    Yukthi.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <div className="rounded-full bg-primary/10 p-2">
                                            <div className="h-10 w-10 rounded-full bg-gray-200" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-lg">
                                                Sarah Johnson
                                            </CardTitle>
                                            <CardDescription>
                                                Software Developer
                                            </CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        "Yukthi helped me learn React in half
                                        the time it would have taken with
                                        traditional courses. The chapter-wise
                                        approach made complex concepts easy to
                                        understand."
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <div className="rounded-full bg-primary/10 p-2">
                                            <div className="h-10 w-10 rounded-full bg-gray-200" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-lg">
                                                Michael Chen
                                            </CardTitle>
                                            <CardDescription>
                                                Marketing Manager
                                            </CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        "I needed to quickly learn about SEO
                                        strategies for my new role. Yukthi
                                        created a perfect course that covered
                                        everything I needed to know."
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <div className="rounded-full bg-primary/10 p-2">
                                            <div className="h-10 w-10 rounded-full bg-gray-200" />
                                        </div>
                                        <div>
                                            <CardTitle className="text-lg">
                                                Emily Rodriguez
                                            </CardTitle>
                                            <CardDescription>
                                                Student
                                            </CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        "As a student, I use Yukthi to
                                        supplement my university courses. It
                                        breaks down difficult subjects into
                                        manageable chapters that are easy to
                                        follow."
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="bg-primary text-primary-foreground py-16 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Ready to Transform Your Learning?
                                </h2>
                                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Join thousands of learners who are mastering
                                    new skills with Yukthi.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link href={"/login"}>
                                    <Button
                                        size="lg"
                                        variant="secondary"
                                        className="gap-1"
                                    >
                                        Get Started{" "}
                                        <ArrowUpRight className="h-4 w-4" />
                                    </Button>
                                </Link>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                                >
                                    Learn More
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="border-t py-6 px-10 md:py-0">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <div className="flex items-center gap-2 font-bold">
                        <Image
                            src={"/YUKTHI_LOGO-removebg-preview.png"}
                            className="scale-180"
                            alt="logo"
                            width={20}
                            height={20}
                        ></Image>
                        <span>Yukthi</span>
                    </div>
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        © 2025 Yukthi. All rights reserved.
                    </p>
                    <div className="flex w-24 items-center gap-4"></div>
                </div>
            </footer>
        </div>
    );
}
