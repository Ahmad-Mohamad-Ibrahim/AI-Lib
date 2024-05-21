import TypeIt from 'typeit-react';

export default function ChatCard({ children, addclassName, speaker }) {
    return (
        <div className={`chat-card ${addclassName}`}>
            <p className="chat-card-content">
                <TypeIt>
                    <strong className="font-bold">{speaker}</strong>: {children}
                </TypeIt>
            </p>
        </div>
    )
}
