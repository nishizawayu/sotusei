import { Bungee } from "next/font/google";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

export default function From() {

    let deta = 80;

    const [planpoint, setPlanPoint] = useState(3);
    const [cpoint, setCPoint] = useState(3);
    const [ppoint, setPPoint] = useState(3);
      
    //マナーを入力してもらう画面
    const Manner = ()=>{
        //アコーディオンの中身のデータ
        const Acotext = ["まずまず","とてもいい","すごくいい"];
        //アコーディオンの開閉用
        const [isOpen, setIsOpen] = useState(false);
        //アコーディオンの切り替え用（初期値：まずまず）
        const [Acomenu, setAcomenu] = useState("まずまず");

        //アコーディオンを生成する
        const AccordionItem = ({ title, content }) => {
        
            return (
            <div className="accordion-item">
                <div
                className="accordion-title flex justify-between items-center bg-gray-200 p-4 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
                >
                <h3>{Acomenu}</h3>
                {isOpen ? <FaAngleUp /> : <FaAngleDown />}
                </div>
                {isOpen && <div className="accordion-content p-4 border-x-2 border-b-2 border-gray-200 underline decoration-gray-500">{content}</div>}
            </div>
            );
        };

        return(
            <div>
                <p className="w-[80%] mx-auto mt-6">&lt;戻る</p>
                <section className="w-full max-w-xs mx-auto">
                    <h2 className="text-xl font-bold text-center mt-6">ご配慮はできてましたか</h2>

                    <div className="container mx-auto mt-16">
                        <AccordionItem
                            // contentに書いたことがアコーディオンの中身になる
                            content={
                            <>
                                <p className="py-2" 
                                 onClick={()=>{
                                    setAcomenu(Acotext[0]);
                                    setIsOpen(false);
                                }}>まずまず</p>

                                <p className="py-2" 
                                 onClick={()=>{
                                    setAcomenu(Acotext[1]);
                                    setIsOpen(false);
                                }}>とてもいい</p>

                                <p className="py-2" 
                                 onClick={()=>{
                                    setAcomenu(Acotext[2]);
                                    setIsOpen(false);
                                }}>すごくいい</p>
                            </>
                            
                            }
                        />
                    </div>
                </section>
                {/* ボタンのUI */}
                <div className="font-bold text-2xl flex justify-center">
                    <button className="bg-[#00ff00] px-8 my-16 rounded-md flex items-center" onClick={()=>{
                        console.log(Acomenu);
                    }}>next<span className="text-base ml-1">&gt;</span></button>
                </div>
            </div>
        )
    }

    //コメントを入力してもらう画面
    const Coment = ()=>{
        // テキストボックス用
        const [inputText, setInputText] = useState('');

        // テキストボックスに入力がされた時
        const handleChange = (e) => {
            setInputText(e.target.value);
        };

        return(
            <div>
                <p className="w-[80%] mx-auto mt-6">&lt;戻る</p>
                <section className="w-full max-w-xs mx-auto">
                    <h2 className="text-xl font-bold text-center mt-6">よろしければコメントを<br/>お願いします</h2>
                    {/* テキストボックス */}
                    <div className="mt-16">
                        <label htmlFor="textInput" className="block text-lg mb-2">
                            Enter Text:
                        </label>
                        <textarea
                            id="textInput"
                            value={inputText}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md resize-none"
                            style={{ backgroundColor: 'white', minHeight: '200px' }}
                        />
                        <p className="mt-2">You entered: {inputText}</p>
                    </div>
                </section>
                {/* ボタン */}
                <div className="font-bold text-2xl flex justify-center">
                    <button className="bg-[#00ff00] px-8 my-16 rounded-md flex items-center" onClick={()=>{
                        console.log(inputText);
                    }}>next<span className="text-base ml-1">&gt;</span></button>
                </div>
            </div>
        )
    }


    return(
        <div>
            <p className="w-[80%] mx-auto mt-6">&lt;戻る</p>

            <h2 className="text-xl font-bold text-center mt-6">作品の評価をお願いします。</h2>

            <div className="w-full max-w-xs mx-auto mt-10">
                <div className="flex justify-between">
                    <p className="font-bold">企画</p>
                    <p className="font-bold">{planpoint}点</p>
                </div>
                <input type="range" min="1" max="5" className="range max-w-xs range-primary mt-4" step="1" defaultValue={planpoint} onChange={(event) => setPlanPoint(event.target.value)}/>
                <div className="w-full flex justify-between text-xs px-2 max-w-xs">
                    <p>1</p> <p>2</p> <p>3</p> <p>4</p><p>5</p>
                </div>
            </div>
            
            <div className="w-full max-w-xs mx-auto mt-10">
                <div className="flex justify-between">
                    <p className="font-bold">完成度</p>
                    <p className="font-bold">{cpoint}点</p>
                </div>
                <input type="range" min="1" max="5" className="range max-w-xs range-primary mt-4" step="1" defaultValue={cpoint} onChange={(event) => setCPoint(event.target.value)}/>
                <div className="w-full flex justify-between text-xs px-2 max-w-xs">
                    <p>1</p> <p>2</p> <p>3</p> <p>4</p><p>5</p>
                </div>
            </div>

            <div className="w-full max-w-xs mx-auto mt-10">
                <div className="flex justify-between">
                    <p className="font-bold">プレゼン</p>
                    <p className="font-bold">{ppoint}点</p>
                </div>
                <input type="range" min="1" max="5" className="range max-w-xs range-primary mt-4" step="1" defaultValue={ppoint} onChange={(event) => setPPoint(event.target.value)}/>
                <div className="w-full flex justify-between text-xs px-2 max-w-xs">
                    <p>1</p> <p>2</p> <p>3</p> <p>4</p><p>5</p>
                </div>
            </div>

            <div className="font-bold text-2xl flex justify-center">
                <button className="bg-[#ff0000] px-8 my-16 rounded-md flex items-center" onClick={()=>{
                    console.log(planpoint);
                    console.log(cpoint);
                    console.log(ppoint);
                }}>next<span className="text-base ml-1">&gt;</span></button>
            </div>
            
            <Manner/>

            <Coment/>

        </div>
    )
}