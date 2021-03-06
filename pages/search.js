import { format } from 'date-fns';
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import InfoCard from '../components/InfoCard';

function Search({ searchResult }) {
    const router = useRouter();
    const { location, startDate, endDate, noOfGuests } = router.query;
    
    const date = new Date();
    const formattedStartDate = format(date, "dd MMMM yy");
    const formattedEndDate = format(date, "dd MMMM yy");
    const range = `${formattedStartDate} - ${formattedEndDate}`;


    return (
        <div className="h-screen">
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
            
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">300+ stays - {range} -  for { noOfGuests } number pf guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in London</h1>
                    <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and beds</p>
                        <p className="button">More Filter</p>
                    </div>

                    <div className="flex flex-col mx-auto">
                        {searchResult.map(({img, location,  title, description, star, price, total }) => (
                            <InfoCard
                                key={img}
                                img={img}
                                location={location}
                                title={title}
                                description={description}
                                star={star}
                                price={price}
                                total={total}
                            />
                        ))}
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    )
}

export default Search;


export async function getServerSideProps() {
    const searchResult = await fetch("https://links.papareact.com/isz").then(res => res.json());

    return {
        props: {
            searchResult,
        }
    }
} 