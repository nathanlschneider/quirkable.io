const AppLoader = (props) =>{
    return (
        <section className={styles.content_wrapper_two}>
				<section className={styles.content_wrapper_two_inner}>
					<div
						style={{
							display: "flex",
							alignItems: "flex-end",
							paddingBottom: "30px",
							justifyContent: "space-between",
							gridRow: "2",
							gridColumn: "1 /span 3",
							borderBottom: "2px solid var(--deep-purple)",
						}}
					>
						<h1
							style={{ color: "var(--deep-purple)", fontSize: "46px" }}
							className={`${lexend_deca.className}`}
						>
							Apps/Extentions
						</h1>
						<Link
							className={`${nunito.className} ${styles.btn} ${ui.btn} ${ui.btn_medium}`}
							style={{ maxWidth: "180px" }}
							href='/next'
						>
							All Products
						</Link>
					</div>
					<span style={{ gridColumn: "1", gridRow: "3" }}>
						<FeedReader />
					</span>
				</section>
			</section>
    )
}

export default AppLoader;
