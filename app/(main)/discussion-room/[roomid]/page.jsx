"use client"
import { useParams } from 'next/navigation'
import React from 'react'

function DiscussionRoom() {
    const {roomid}= useParams();

  return (
    <div>DiscussionRoom</div>
  )
}

export default DiscussionRoom