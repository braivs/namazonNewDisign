import React from "react"
import s from "./join-us.module.scss"

const PATREON_MEMBERSHIP_URL = "https://www.patreon.com/c/namazon/membership"

const JoinUsContent = () => {
  return (
    <section className="contact-area pt-130 pb-115">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-12 text-center">
            <p className={s.membershipText}>
              Access to all Namazon Club videos before NC68{" "}
              <em>except Siya&apos;s exclusive series</em>.
            </p>
            <p className="mb-0">
              <a
                className={s.membershipLink}
                href={PATREON_MEMBERSHIP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join on Patreon
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinUsContent
