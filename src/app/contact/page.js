"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Mail, User, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import Button from '@/components/ui/Button';

function ContactContent() {
    const searchParams = useSearchParams();
    const [status, setStatus] = useState('idle'); // idle, sending, success, error
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    });

    useEffect(() => {
        const subjectParam = searchParams.get('subject');
        if (subjectParam === 'AmexGoldPreferred') {
            setFormData(prev => ({
                ...prev,
                subject: 'アメックス・ゴールド・プリファード紹介依頼',
                message: 'アメックス・ゴールド・プリファード・カードの紹介URLの送付をお願いします。'
            }));
        }
    }, [searchParams]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        
        // Simulating API call
        setTimeout(() => {
            setStatus('success');
            // Reset form
            setFormData({
                name: '',
                email: '',
                subject: 'General Inquiry',
                message: ''
            });
        }, 1500);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    if (status === 'success') {
        return (
            <div className="container mx-auto px-6 py-20 max-w-2xl text-center">
                <div className="bg-white rounded-3xl p-12 shadow-xl border border-slate-100 flex flex-col items-center">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h1 className="text-3xl font-bold text-slate-800 mb-4">送信が完了しました</h1>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        お問い合わせありがとうございます。内容を確認次第、入力いただいたメールアドレスへご連絡いたしますので、少々お待ちください。
                    </p>
                    <Button href="/" variant="primary">トップページへ戻る</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 py-12 max-w-4xl">
            <header className="text-center mb-16">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">お問い合わせ</h1>
                <p className="text-slate-600 max-w-xl mx-auto">
                    アメックス紹介のご依頼や、ブログに関するご質問・ご感想など、お気軽にお問い合わせください。
                </p>
            </header>

            <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-1 space-y-8">
                    <div>
                        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                            <Mail className="w-5 h-5 text-primary" />
                            メールでのお問い合わせ
                        </h3>
                        <p className="text-sm text-slate-600">
                            通常2〜3営業日以内に返信いたします。<br />
                            ※紹介URLは最優先で送付します。
                        </p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                        <h4 className="font-bold text-slate-800 mb-2 text-sm uppercase tracking-wider">Note</h4>
                        <p className="text-[13px] text-slate-500 line-clamp-6 leading-relaxed">
                            アメックスの紹介URLは、規約により不特定多数が見られる場所への掲載が禁止されています。1対1のメールでお送りすることで、安全に特典を受け取ることができます。
                        </p>
                    </div>
                </div>

                <div className="md:col-span-2">
                    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                    <User className="w-4 h-4" /> お名前
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="はるふー 太郎"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-300"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                    <Mail className="w-4 h-4" /> メールアドレス
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="example@mail.com"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-300"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                <MessageSquare className="w-4 h-4" /> 件名
                            </label>
                            <select
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                            >
                                <option value="General Inquiry">一般的なお問い合わせ</option>
                                <option value="アメックス・ゴールド・プリファード紹介依頼">アメックス・ゴールド・プリファード紹介依頼</option>
                                <option value="Other">その他</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                                <MessageSquare className="w-4 h-4" /> お問い合わせ内容
                            </label>
                            <textarea
                                name="message"
                                required
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="メッセージを入力してください..."
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-300 resize-none"
                            />
                        </div>

                        <Button 
                            type="submit" 
                            variant="primary" 
                            className="w-full py-4 text-lg shadow-lg shadow-primary/20 mt-4 h-auto"
                            disabled={status === 'sending'}
                        >
                            {status === 'sending' ? '送信中...' : 'メッセージを送信する'} 
                            <Send className="ml-2 w-5 h-5" />
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default function ContactPage() {
    return (
        <Suspense fallback={<div className="container mx-auto px-6 py-12 text-center text-slate-500">読み込み中...</div>}>
            <ContactContent />
        </Suspense>
    );
}
