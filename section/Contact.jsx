"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      alert("Failed to send message");
      return;
    }
    
    const data = await res.json();

    if (data.success) {
      alert("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Contact
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Have a question or want to work together? Send a message.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-3xl rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-8"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground">
              Your Name
            </label>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
              className="h-11 bg-muted/50"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              Email address
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Your email address"
              value={form.email}
              onChange={handleChange}
              className="h-11 bg-muted/50"
            />
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Write something...."
            rows="7"
            value={form.message}
            onChange={handleChange}
            className="resize-none bg-muted/50"
          />
        </div>

        <Button type="submit" className="mt-6 h-11 w-full">
          Send Message
        </Button>
      </form>
    </section>
  );
}
