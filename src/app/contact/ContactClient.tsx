"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

const TO_EMAIL = "sales@vintagewrist.example";

function buildMailto(subject: string, body: string) {
  const s = encodeURIComponent(subject);
  const b = encodeURIComponent(body);
  return `mailto:${TO_EMAIL}?subject=${s}&body=${b}`;
}

export function ContactClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const subject = "Question about a vintage watch";
  const body = [`Name: ${name || "(not provided)"}`, `Email: ${email || "(not provided)"}`, "", message || "(no message)"].join(
    "\n",
  );

  return (
    <div className="max-w-3xl rounded-3xl border border-[rgba(0,0,0,0.18)] bg-[color:var(--paper)]/95 p-6 text-[color:var(--ink)] shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
      <div className="grid gap-3 sm:grid-cols-2">
        <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          inputMode="email"
        />
      </div>
      <div className="mt-3">
        <Textarea
          placeholder="Message (include a watch name or link if you have one)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center">
        <a href={buildMailto(subject, body)}>
          <Button>Open email</Button>
        </a>
        <div className="text-xs text-[#9c8364]">
          Sends to <span className="text-[color:var(--ink)]">{TO_EMAIL}</span> (update in{" "}
          <span className="text-[color:var(--ink)]">src/app/contact/ContactClient.tsx</span>).
        </div>
      </div>
    </div>
  );
}

