import React from 'react';
import ChatCard from "@/Components/ChatCard";
import Delayed from '@/Components/Delayed';

const chat = [
    {
        speaker: 'Me',
        text: 'Hello, how are you?'
    },
    {
        speaker: 'GPT',
        text: 'Great'
    },
    {
        speaker: 'Me',
        text: 'Have a question'
    },
    {
        speaker: 'GPT',
        text: 'Ask'
    },
    {
        speaker: 'Me',
        text: 'How old are you ?'
    },
    {
        speaker: 'GPT',
        text: "I don't have an age in the traditional sense since I'm an artificial intelligence created by OpenAI. My most recent update is based on the GPT-4 architecture, which was released in 2023. I exist to assist users with a variety of tasks and provide information based on the data I've been trained on. How can I help you today?"
    }
]

export default function AiToolsSection() {
    return (
        <section className="flex justify-evenly gap-2 bg-gradient-to-r from-primary-shade-200 via-secondary to-accent p-8">
            <div className="text-card flex flex-col gap-4 max-w-[50%] bg-secondary w-[50%] min-h-[700px]">
                {
                    chat.map((ele, index) => {
                        return <Delayed waitBeforeShow={4000 * index}>
                            <ChatCard key={index} speaker={ele.speaker}>{ele.text}</ChatCard>
                        </Delayed>
                    })
                }
            </div>
        </section>
    )
}
