import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedList } from '../lib/data';

// define a getStaticProps() function - this name is defined by next.js
export async function getStaticProps() {
  const allData = getSortedList();
  return {
    props: { allData }
  };
}

// export our home page component Home
export default function Home( { allData } ) {
  return (
    <Layout home>
      <h4 className = "mb-3 text-center">(by a dessert-enthusiast)</h4>
      <div className="list-group">
        {allData.map(
            ({id, name}) => (
              <Link key={id} href={`/${id}`} className="list-group-item list-group-item-action">
                {name}
              </Link>
            )
          )
        }
      </div>
    </Layout>
  );
}