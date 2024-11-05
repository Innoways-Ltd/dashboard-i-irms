import React from 'react'
import { AiFillHeart } from "react-icons/ai";
import { FaMapPin } from "react-icons/fa";
import NotLoadSvg from '../assets/not-load.svg'

export default function MyProperties({ item }) {
    let showData = item?.data?.items?.slice(0, 6)
    return (
        <>
            <div className="pre-selected-block" id="map-content">
                <div className="row" style={{ marginTop: '10px' }}>
                    {showData?.map((obj, index) => {
                        return (
                            <>
                                <div
                                    className={`col-lg-6 itnerary-padd`}
                                    onClick={() => { }}
                                >
                                    <div className="img-box-it-new img-shadow">
                                        <img
                                            src={obj?.imgPreview?.[0]}
                                            className="img-fluid"
                                            alt="property-image"
                                            width="100%"
                                            onError={(e) => {
                                                e.target.setAttribute('src', NotLoadSvg)
                                            }}
                                        />

                                        <div className="g-title">

                                            <p className="preselected-overflow text-white mb-0">
                                                {obj?.placeName}
                                            </p>
                                            {obj?.address && (
                                                <div className="inner-title preselected-overflow">
                                                    <FaMapPin size={18} />
                                                    {obj?.address}
                                                </div>
                                            )}
                                        </div>
                                        <div className="herat-icon">
                                            <span>
                                                {obj?.selectFg ? (
                                                    <AiFillHeart size={22} color='red' />
                                                ) : (
                                                    <AiFillHeart size={22} color='white' />
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            {item?.data?.items?.length > 6 &&
                <div className="last-btn-block">
                    <div className="line-border"></div>
                    <div className="see-all-button">
                        <a href="javascript:void(0)">
                            <div>{item?.data?.view_all_text}</div>
                        </a>
                    </div>
                </div>}
        </>
    )
}
