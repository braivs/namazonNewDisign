import React from "react"
import s from "./join-us.module.scss"

const PATREON_MEMBERSHIP_URL = "https://www.patreon.com/c/namazon/membership"

const membershipTiers = [
  {
    title: "Fresh pack",
    price: "$30 / month",
    description: "Access to 5 new videos (NC69-NC73) not included in the Video Access tier.",
  },
  {
    title: "Video access",
    price: "$45 / month",
    description: (
      <>
        Access to all Namazon Club videos from the beginning up to NC68{" "}
        <em>except Siya&apos;s exclusive series</em>.
      </>
    ),
  },
  {
    title: "Siya pack",
    price: "$50 / month",
    description: "Unlock Siya's exclusive 5-clip series: NC60 to NC64.",
  },
]

const JoinUsContent = () => {
  return (
    <section className="contact-area pt-130 pb-115">
      <div className="container">
        <div className="row justify-content-center g-4">
          {membershipTiers.map((tier) => (
            <div key={tier.title} className="col-lg-4 col-md-6 col-12">
              <article className={s.membershipCard}>
                <h3 className={s.membershipTitle}>{tier.title}</h3>
                <p className={s.membershipPrice}>{tier.price}</p>
                <p className={s.membershipText}>{tier.description}</p>
                <a
                  className={s.membershipLink}
                  href={PATREON_MEMBERSHIP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join on Patreon
                </a>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JoinUsContent
