import {FAQ} from "./FAQ"
import FAQCard from "./FAQCard"
const FAQSection = ()=>{
    return(
      <section className="bg-white dark:bg-gray-900">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
    <h2
      className="mb-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white"
    >
      Frequently asked questions
    </h2>
    <div
      className="grid border-t border-gray-200 pt-8 text-left md:grid-cols-2 md:gap-16 dark:border-gray-700"
    >
            {FAQ.map((FAQ,index)=>(
              <FAQCard key={index} question={FAQ.question} answer={FAQ.answer}/>
            ))}
    </div>
  </div>
</section>
    )
}

export default FAQSection