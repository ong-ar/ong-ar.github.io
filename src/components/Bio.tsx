import React from 'react'
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'
import avatar from "../images/avatar.jpg"

interface BioProps {
  className?: string
}

function Bio(props: BioProps) {
  let photoURL = getGravatarURL({
    email: "reclusis@gmail.com",
    size: 56,
  })

  return (
    <div
      className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={avatar} alt="Me" />
      <p>
        웹 개발자
        <br />
        관심 기술: react, graphql(prisma), flutter
      </p>
    </div>
  )
}

export default Bio
