<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactMessageMail extends Mailable
{
    use Queueable, SerializesModels;
    protected $senderName;
    protected $senderEmail;
    protected $messageBody;

    /**
     * Create a new message instance.
     */
    public function __construct($senderInfo)
    {
        $this->senderEmail = $senderInfo["email"];
        $this->senderName = $senderInfo["name"];
        $this->messageBody = $senderInfo["body"];
    }

    

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'A message by ' . $this->senderName,
            from:$this->senderEmail,
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'email.message',
            with: ['messageBody' => $this->messageBody],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
