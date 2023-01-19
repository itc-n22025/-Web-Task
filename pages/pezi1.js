import styles from 'styles/main1.module.css'

export default function pezi1 () {
  return (
    <>
      <div className={styles.header}>
        <h1>サンプル ウェブサイト</h1>
      </div>
      <div className={styles.main}>
        <h2>Heading 1</h2>
        <p>
          Content comes here. Content comes here. Content comes here.
          Content comes here. Content comes here. Content comes here.
        </p>
        <h2>Heading 2</h2>
        <p>
          Content comes here. Content comes here. Content comes here.
          Content comes here. Content comes here. Content comes here.
        </p>
      </div>
      <div className={styles.footer}>
        <p>Copyright (c) 2013 xxxxxxxx. All rights reserved.</p>
      </div>
    </>
  )
}
