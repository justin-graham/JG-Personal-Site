import { useState, useRef, useEffect } from 'react'
import styles from './ChatUI.module.css'

interface Message {
  text: string
  from: 'justin' | 'user'
}

export default function ChatUI() {
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hey! Thanks for stopping by.', from: 'justin' },
    { text: "Send me a message and I'll get back to you.", from: 'justin' },
  ])
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const [delivered, setDelivered] = useState(false)
  const [failed, setFailed] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const lastUserMessage = useRef('')

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, delivered])

  const sendMessage = async (messageText?: string) => {
    const text = messageText || input.trim()
    if (!text || sending) return

    lastUserMessage.current = text
    setMessages((prev) => [...prev, { text, from: 'user' }])
    setInput('')
    setSending(true)
    setDelivered(false)
    setFailed(false)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      })

      if (res.ok) {
        setDelivered(true)
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            { text: "Got it! I'll get back to you soon.", from: 'justin' },
          ])
        }, 1500)
      } else {
        setFailed(true)
      }
    } catch {
      setFailed(true)
    } finally {
      setSending(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.phone}>
          <div className={styles.chatHeader}>
            <div className={styles.chatAvatar}>JG</div>
            <div className={styles.chatName}>Justin Graham</div>
          </div>
          <div className={styles.messages}>
            <div className={styles.gap} />
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`${styles.bubble} ${
                  msg.from === 'justin' ? styles.incoming : styles.outgoing
                }`}
              >
                {msg.text}
              </div>
            ))}
            {delivered && <div className={styles.delivered}>Delivered</div>}
            {failed && (
              <div
                className={styles.failed}
                onClick={() => sendMessage(lastUserMessage.current)}
              >
                Not Delivered — Tap to retry
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className={styles.inputArea}>
            <input
              type="text"
              className={styles.input}
              placeholder="iMessage"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={sending}
            />
            <button
              className={styles.sendButton}
              onClick={() => sendMessage()}
              disabled={!input.trim() || sending}
              aria-label="Send message"
            >
              <svg viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
        <div className={styles.socials}>
          <a href="mailto:your@email.com">Email</a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            X
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}
