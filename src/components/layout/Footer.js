"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Instagram, Youtube, Mail, ArrowRight, ShoppingBag } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-slate-100 pt-16 pb-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <span className="font-maru text-xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
                            {/* The source PNG has large white padding, so crop it by scaling inside a fixed frame */}
                            <span className="relative block h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-slate-200 shadow-sm">
                                <Image
                                    src="/はるふーtravel.png"
                                    alt="はるふートラベル"
                                    width={48}
                                    height={48}
                                    className="absolute inset-0 h-full w-full object-contain scale-[1.7]"
                                />
                            </span>
                            はるふートラベル
                        </span>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            賢い旅とお得術。
                            <br />
                            マイルとポイントで、家族の思い出をもっと豊かに。
                        </p>
                        <div className="pt-1">
                            <a
                                href="https://room.rakuten.co.jp/room_6f3e1c023f/items"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-medium text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
                            >
                                楽天ROOMはこちら <ArrowRight className="h-3 w-3" />
                            </a>
                        </div>
                        <div className="flex space-x-4 pt-2">

                            <a href="https://www.instagram.com/marimo_dog_/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent transition-colors hover:scale-110 transform duration-200">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="https://www.youtube.com/@haruhu-26271" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-500 transition-colors hover:scale-110 transform duration-200">
                                <Youtube className="h-5 w-5" />
                            </a>
                            <a href="https://note.com/juicy_roses5378" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#2cb696] transition-colors hover:scale-110 transform duration-200" title="note">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                    <path d="M17.06 20.17h-2.14v-7.64c0-1.89-.54-2.84-1.62-2.84-.66 0-1.22.36-1.67 1.07v9.41H9.49V3.83h2.14v3.13c.64-1.12 1.48-1.68 2.53-1.68 2.12 0 3.18 1.44 3.18 4.31v10.58z"/>
                                </svg>
                            </a>
                            <a href="https://room.rakuten.co.jp/room_6f3e1c023f/items" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#bf0000] transition-colors hover:scale-110 transform duration-200" title="楽天ROOM">
                                <ShoppingBag className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">はじめての方へ</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/campaigns" className="text-slate-500 hover:text-primary text-sm transition-colors">
                                    最新キャンペーン
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-slate-500 hover:text-primary text-sm transition-colors">
                                    お問い合わせ
                                </Link>
                            </li>
                        </ul>
                    </div>


                </div>

                <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-400">
                        &copy; {new Date().getFullYear()} はるふートラベル. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-xs text-slate-400">
                        <Link href="/privacy" className="hover:text-foreground">プライバシーポリシー</Link>
                        <Link href="/terms" className="hover:text-foreground">利用規約</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
