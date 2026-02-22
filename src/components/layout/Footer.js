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
                        <span className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
                            <Image
                                src="/はるふーtravel.png"
                                alt="はるふートラベル"
                                width={40}
                                height={40}
                                className="w-auto h-8"
                            />
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
                        </ul>
                    </div>


                </div>

                <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-400">
                        &copy; {new Date().getFullYear()} Harufoo Travel. All rights reserved.
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
