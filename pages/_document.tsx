import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

export default class myDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
                <Head>

                </Head>
                <body className="th-bgcolor">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}