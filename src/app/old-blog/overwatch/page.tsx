import styles from '../../page.module.css'

export default function Page123() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <h1>Hello, I'm page "old-blog/overwatch"!</h1>
                <p>You can see me only if redirect to "/news/:slug" was removed</p>
            </div>
            <h2>Here should be an article about Overwatch</h2>
        </main>
    )
}
