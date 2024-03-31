import styles from '../../page.module.css'

export default function Page123() {
    return (
        <main className={styles.main}>
            <div className={styles.description}>
                <h1>Hello, I'm page "news/123"</h1>
                <p>You can see me only if redirect to "/news/:slug" is working</p>
            </div>
        </main>
    )
}
