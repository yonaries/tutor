'use client';

import { SimonDarkButton } from "@/app/page";
import Countdown from "@/components/Countdown";
import Nav from "@/components/Nav";
import { Box, Button, Card, CardContent, CardHeader, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useMemo, useState } from "react";
const test = {
    questions: [
        {
            question: "What is a compiler?",
            options: [
                "A program that translates high-level source code into machine code",
                "A program that interprets high-level source code directly",
                "A program that optimizes source code for better performance",
            ],
            answer: 1,
        },
        {
            question: "What are the main phases of a compiler?",
            options: [
                "Lexical analysis, syntax analysis, semantic analysis, code generation, and code optimization",
                "Code generation, code optimization, and code execution",
                "Syntax analysis, semantic analysis, and code execution",
            ],
            answer: 0,
        },
        {
            question: "What is lexical analysis?",
            options: [
                "The process of breaking the source code into tokens",
                "The process of generating optimized machine code",
                "The process of checking the correctness of the source code",
            ],
            answer: 0,
        },
        {
            question: "What is syntax analysis?",
            options: [
                "The process of analyzing the structure of the source code based on a grammar",
                "The process of transforming the source code into an intermediate representation",
                "The process of generating optimized machine code",
            ],
            answer: 2,
        },
        {
            question: "What is semantic analysis?",
            options: [
                "The process of checking the meaning and correctness of the source code",
                "The process of transforming the source code into an intermediate representation",
                "The process of generating optimized machine code",
            ],
            answer: 0,
        },
        {
            question: "What is code generation?",
            options: [
                "The process of translating the intermediate representation into the target machine code",
                "The process of checking the syntax of the source code",
                "The process of optimizing the source code for better performance",
            ],
            answer: 0,
        },
        {
            question: "What is code optimization?",
            options: [
                "The process of improving the efficiency and performance of the generated machine code",
                "The process of checking the meaning and correctness of the source code",
                "The process of transforming the source code into an intermediate representation",
            ],
            answer: 0,
        },
        {
            question: "What is the symbol table in a compiler?",
            options: [
                "A data structure that stores information about symbols (variables, functions, etc.) in the source code",
                "A table that maps source code lines to machine code instructions",
                "A table that stores intermediate representations of the source code",
            ],
            answer: 0,
        },
        {
            question: "What is a parse tree?",
            options: [
                "A tree-like structure that represents the syntactic structure of the source code",
                "A table that maps source code lines to machine code instructions",
                "A table that stores intermediate representations of the source code",
            ],
            answer: 0,
        },
        {
            question: "What is a compiler optimization?",
            options: [
                "The process of improving the efficiency and performance of the generated machine code",
                "The process of checking the syntax of the source code",
                "The process of translating the intermediate representation into the target machine code",
            ],
            answer: 2,
        },
    ],
};

function Page() {
    const targetDate = useMemo(() => {
        const d = new Date()
        return d.setMinutes(d.getMinutes() + 10)
    }, [])
    const [answers, setAnswers] = useState(Array(test.questions.length).fill(0).map(() => null));
    const handleFinishAssessment = () => {
        let counter = 0
        test.questions.forEach((question, key) => {
            if (answers[key] === question.answer) {
                counter++
            }
        })
        alert(`Thank you! Score: ${counter}/${answers.length}`)
    }
    return (
        <Container maxWidth="lg">
            <Nav />

            <Box sx={{ mt: 3, py: 2, px: 2, boxShadow: '2px 2px 10px 2px rgba(0,0,0,0.1)', borderRadius: 10 }}>
                Assessment
            </Box>

            <Grid container spacing={3} sx={{ mt: 5 }}>
                <Grid item xs={12} md={4}>
                    <Countdown targetDate={targetDate} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Stack spacing={2}>

                        {test.questions.map((question, key1) => (
                            <Card key={key1}>
                                <CardHeader title={question.question} />
                                <CardContent>
                                    <Stack spacing={1}>
                                        {question.options.map((option, key2) => (
                                            <Button key={key2} variant={answers[key1] === key2 ? "contained" : "outlined"} sx={{ textTransform: 'none', color: 'black' }} onClick={() => {
                                                const newAnswers = [...answers]
                                                newAnswers[key1] = key2
                                                setAnswers(newAnswers)
                                            }}>{option}</Button>
                                        ))}
                                    </Stack>
                                </CardContent>
                            </Card>
                        ))}
                        <Button variant="contained" onClick={handleFinishAssessment} sx={{ my: 10 }}>Finish</Button>
                        <Box sx={{ height: 35 }} />
                    </Stack>

                </Grid>
            </Grid>
        </Container>
    )
}

export default Page