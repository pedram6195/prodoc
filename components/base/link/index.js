import React from 'react'

export default function CustomLink ({children, className, href, ...props}) {
    return (
        <a href={href} className={className} {...props}>
            {children}
        </a>
    )
}