import React from 'react'

export default function MyButtonBlock({ item }) {
    return (
        <div
            className="buttons-block"
            style={{ minHeight: '269px' }}
        >
            <div className="two-button-bg" style={{ minHeight: '269px' }}>
                {item?.data?.items?.map((obj, index) => {
                    return (<a href="javascript:void(0)" key={index}>
                        <div className="cm-btn my-profle-buton">
                            {obj?.text}
                        </div>
                    </a>)
                })}
            </div>
        </div>
    )
}
