import React from 'react'
import ReactPlayer from 'react-player'
import { FiPlay } from 'react-icons/fi'
import {
  Player,
  BigPlayButton,
  FullscreenToggle,
  ControlBar,
  PlayToggle,
  VolumeMenuButton,
  ProgressControl
} from 'video-react'
import 'video-react/dist/video-react.css'

const VideoBlock = ({ item }) => {
  const showData = item.data.videosPerRow ? item.data.data?.slice(0, Math.floor(item.data.videosPerRow * 2)) : item.data.data?.slice(0, 4)

  return (
    <>
      <div className="videos-list mt-2">
        <div className="row">
          {showData?.map((obj) => {
            return (
              <>
                <div
                  className={`col-lg-${item?.data?.videosPerRow ? Math.floor(12 / item.data.videosPerRow) : 6}`}
                >
                  {obj?.videoType ===
                    'Link' ? (
                    <ReactPlayer
                      url={
                        obj?.preview
                      }
                      width="100%"
                      height="100%"
                      controls={false}
                      playing={false}
                      onClickPreview={() => {
                        window.open(
                          obj?.preview,
                          '_blank'
                        )
                      }}
                      {...(item.data?.videoPlayerSettings ? item.data?.videoPlayerSettings : {})}
                    />
                  ) : (
                    <div className="mar-rg">
                      <div className="video-box">
                        <div className="custom-upper-layer"></div>
                        <Player
                          fluid={false}
                          width="100%"
                          height="100%"
                          playsInline
                          src={
                            obj?.preview
                          }
                        >
                          <BigPlayButton position="center" />
                          <ControlBar
                            autoHide={true}
                            disableDefaultControls={false}
                          >
                            <PlayToggle
                              order={
                                1
                              }
                            />
                            <VolumeMenuButton
                              order={
                                2
                              }
                            />
                            <ProgressControl
                              order={
                                3
                              }
                            />
                            <FullscreenToggle
                              disabled
                            />
                          </ControlBar>
                        </Player>
                      </div>
                    </div>
                  )}
                  <div className="video-title" style={{ marginTop: '5px', marginBottom: '15px' }}>
                    {obj?.videoName}
                  </div>
                </div>
              </>
            )
          })}

        </div>
      </div>
      {item?.data?.data?.length > 4 &&
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

export default VideoBlock