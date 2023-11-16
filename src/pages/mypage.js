import React from 'react'

export default function Mypage() {
    const username = "斎藤 元";
    const num = 1;
    return (
        <div>
        <section className='w-full'>
            <div className='flex'>
                <h2>
                    {username}
                </h2>
                <p>{num}</p>
            </div>
            <div className='flex'>
                <p>全体</p>
                <p>1日目</p>
                <p>2日目</p>
                <p>3日目</p>
            </div>
        </section>
        </div>
    )
}