import '@styles/globals.css';
import Header from '@components/Header';
import ProductDetails from '@components/ProductCard';
import ProductDescription from '@components/ProductDescription';
import ArticleSimilaire from '@components/ArticleSimilaire';
import RecommendeProducts from '@components/RecommendeProducts';
import TakeCare from '@components/TakeCare';
import NewsLetter from '@components/NewsLetter';
import Footer from '@components/Footer';

export const metadata = {
    title: "MY-APP",
    description: ''
}

const RootLayout = () => {
  return (
    <html lang='en'>
        <body>
            <main className="">
                <Header />
                <ProductDetails />
                <ProductDescription />
                <ArticleSimilaire />
                <RecommendeProducts />
                <TakeCare />
                <NewsLetter />
                <Footer />
            </main>
        </body>
    </html>
  )
}

export default RootLayout
