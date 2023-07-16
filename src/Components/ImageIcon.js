import React from 'react'

export default function ImageIcon(props) {
    const { size, url, style } = props;
    const heights = {
        small: 20,
        medium: 30,
        large: 45
    }
    return (
        <img src={url} alt="image_icon" style={{ height: heights[size], width: heights[size], objectFit: 'contain', ...style }} />
    )
}
