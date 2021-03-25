

function Contact(props) {
  const data = props.data;
  // const allTitle = data.Main;
  return (
    <>
		<section id="contact">
		<h2 id="section3">{data.title}</h2>
		<div class="content-contact">
			<h5>{data.headline}</h5>
			<p>{data.content}</p>
		</div>
		</section>
	</ >
	);
}

export default Contact;
