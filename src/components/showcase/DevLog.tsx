import React, { useEffect, useState } from "react";
import meIcon from '../../assets/pictures/contact-me.png';

export interface DevLogProps {}
export interface Post {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
}

const DevLog: React.FC<DevLogProps> = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
        "https://medium.com/feed/@xavier2812"
      )}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPosts(
          data.items.map((item: any) => ({
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            // ← Fix: assign into contentSnippet, not description
            contentSnippet: item.content_snippet,
          }))
        );
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
        <div className="site-page-content">
            <div style={styles.header}>
                <h1 style={styles.title}>My DevLogs</h1>
            </div>

            {loading ? (
                <p>Loading…</p>
            ) : (
                posts.map((post, i) => (
                    <div key={i} style={styles.card}>
                        <div style={styles.cardHeader}>
                                <h2 style={styles.postTitle}>{post.title}</h2>
                                <div style={styles.meta}>
                                    <time style={styles.postDate}>
                                        {new Date(post.pubDate).toLocaleDateString()}
                                    </time>
                                    <a
                                        href={post.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={styles.readMore}
                                    >
                                        Read more →
                                    </a>
                                </div>
                        </div>
                        <p style={styles.snippet}>{post.contentSnippet}</p>
                    </div>
                ))
            )}
            <div>
                <p style={styles.mediumText}>More Articles Here →</p>
                <a rel="noreferrer" target="_blank" href='https://medium.com/@xavier2812'>
                    <div className="big-button-container" style={styles.mediumButton}>
                        <img src={meIcon} alt="" style={styles.mediumImage} />
                    </div>
                </a>
            </div>
        </div>
    );
};

const styles: { [k: string]: React.CSSProperties } = {
    page: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginLeft: 300,
      padding: "64px 32px",
      width: "calc(100% - 300px)",
      background: "#f5f5f5",
      overflowY: "auto",
      minHeight: "85vh",
      boxSizing: "border-box",
    },
    title: {
      fontSize: "2.5rem",
      margin: "0 0 48px",
    },
    card: {
      background: "#fff",
      borderRadius: 8,
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      padding: 24,
      marginBottom: 32,
      width: "100%",
      maxWidth: 800,
      boxSizing: "border-box",
    },
    cardHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: 12,
    },
    postTitle: {
      flex: 1,
      margin: 0,
      fontSize: "1.5rem",
      lineHeight: 1.2,
      paddingRight: 16,
    },
    meta: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
    },
    postDate: {
      fontSize: "0.9rem",
      color: "#666",
      marginBottom: 4,
      fontFamily: 'MSSerif',
    },
    readMore: {
      fontSize: "0.9rem",
      fontWeight: 500,
      color: "#0066cc",
      fontFamily: 'MSSerif',
    },
    snippet: {
      margin: 0,
      color: "#333",
      lineHeight: 1.6,
      overflowWrap: "break-word",
      wordBreak: "break-word",
    },
    mediumButton: {
        width: 4,
        height: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
        fontFamily: 'MSSerif',
    },
    mediumImage: {
        width: 36,
        height: 36,
    },
    mediumText: {
        width: 100,
        fontFamily: 'MSSerif',
        fontWeight: 900,
    },
  };
  
  export default DevLog;