'use client';

import { useState, useImperativeHandle, forwardRef } from 'react';
import { Form, Input, Button, App } from 'antd';
import { motion } from 'framer-motion';

const { TextArea } = Input;

export interface ContactFormHandle {
    triggerRing: () => void;
}

const ContactForm = forwardRef<ContactFormHandle, {}>((props, ref) => {
    const { message } = App.useApp();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [isActive, setIsActive] = useState(false);

    useImperativeHandle(ref, () => ({
        triggerRing: () => {
            setIsActive(true);
            setTimeout(() => setIsActive(false), 5000); // Ring runs for 5 seconds
        }
    }));

    const handleSubmit = async (values: any) => {
        setLoading(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            const data = await response.json();

            if (data.success) {
                message.success('Message sent successfully! We will get back to you soon.');
                form.resetFields();
            } else {
                message.error(data.error || 'Failed to send message. Please try again later.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            message.error('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact-section" className="py-24 bg-white overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h5
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gold-600 font-bold uppercase tracking-[0.3em] text-xs mb-4"
                    >
                        Get In Touch
                    </motion.h5>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-dark-900 tracking-tighter"
                    >
                        Start Your <span className="text-gold-500">Project.</span>
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`gold-ring-container ${isActive ? 'active' : ''}`}
                >
                    <div className="form-inner p-8 md:p-12 shadow-2xl border border-gray-100">
                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={handleSubmit}
                            requiredMark={false}
                            className="space-y-4"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Form.Item
                                    name="name"
                                    label={<span className="text-xs font-bold uppercase tracking-widest text-gray-400">FullName</span>}
                                    rules={[{ required: true, message: 'Please enter your name' }]}
                                >
                                    <Input placeholder="John Doe" className="h-12 rounded-none border-gray-200 focus:border-gold-500" />
                                </Form.Item>
                                <Form.Item
                                    name="email"
                                    label={<span className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</span>}
                                    rules={[
                                        { required: true, message: 'Please enter your email' },
                                        { type: 'email', message: 'Please enter a valid email' }
                                    ]}
                                >
                                    <Input placeholder="john@example.com" className="h-12 rounded-none border-gray-200 focus:border-gold-500" />
                                </Form.Item>
                            </div>

                            <Form.Item
                                name="subject"
                                label={<span className="text-xs font-bold uppercase tracking-widest text-gray-400">Subject</span>}
                                rules={[{ required: true, message: 'Please enter a subject' }]}
                            >
                                <Input placeholder="Project Inquiry" className="h-12 rounded-none border-gray-200 focus:border-gold-500" />
                            </Form.Item>

                            <Form.Item
                                name="message"
                                label={<span className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</span>}
                                rules={[{ required: true, message: 'Please enter your message' }]}
                            >
                                <TextArea
                                    placeholder="Tell us about your project vision..."
                                    rows={6}
                                    className="rounded-none border-gray-200 focus:border-gold-500"
                                />
                            </Form.Item>

                            <Form.Item className="mb-0 pt-4">
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    loading={loading}
                                    className="w-full bg-dark-900 hover:bg-gold-500 text-gold border-none h-14 text-sm font-black uppercase tracking-[0.2em] rounded-none transition-all duration-300"
                                >
                                    Send Message
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </motion.div>

                <div className="mt-12 text-center text-gray-400 text-sm font-light">
                    Official Inquiry: <a href="mailto:moapexdesignandbuild@gmail.com" className="text-gold-600 font-bold hover:underline">moapexdesignandbuild@gmail.com</a>
                </div>
            </div>
        </section>
    );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
