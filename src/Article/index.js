import "./index.css";
import { useState } from "react";
const Article = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <h1 className="title">Born A Crime</h1>
      <div id="book">
        <div className="introduction">
          <p>
            Born a Crime is a memoir by comedian Trevor
            <br /> Noah about his childhood growing up in apartheid and
            post-apartheid South Africa.Noah was born to a black mother and
            white father, an illegal union at the time, making his very
            existence a criminal act under the racist apartheid regime
          </p>
          <button className="readmore" onClick={() => setShowModal(true)}>
            Read More
          </button>
        </div>
        <div className="novel">
        <img src="./image/Article.png" alt="" className="article"></img>
      
        </div>
      </div>
      {/* <div className="buttons"></div> */}
      <div className="modal" style={{ display: showModal ? "block" : "none" }} >
      <div className="modal1" style={{ display: showModal ? "block" : "none" }}>
        <h1>summary: Chapters 1 & 2</h1>
        <p>
          Before sharing details about his own life, Noah introduces and
          describes the dominant tribes of South Africa to lay the groundwork
          for understanding his country’s history and how it shapes the present.
          When he describes the characteristics of the Xhosa people and
          contrasts them with those of the Zulu people, he also sets the stage
          for subsequent discussions of his family members: his mother,
          Patricia, and her husband, Abel (who will later be introduced). This
          expository information confirms that Patricia is fully Xhosa and sheds
          light on why her relationship with Abel, who is Zulu, is such a
          tumultuous one.
          <br />
          <br />
          This primer on South African history, which Noah will continue to
          intersperse amongst his personal stories, is important for
          understanding the political and cultural climate that prevailed during
          his childhood. Noah includes this discussion of history not just as a
          framework in which to place his life story but because he wants to
          outline the complexities of South Africa for his readers. The
          Europeans who invaded South Africa did not seek to understand its
          people, class structure, traditions, languages, or geography. Noah
          takes pains to ensure that the reader has the tools to comprehend
          these issues, which also allows for a better understanding of his
          story.
          <br />
          <br />
          Noah juxtaposes his mother’s devoutness with his own pragmatic
          relationship with God, giving necessary information about his
          birthplace via a personal anecdote. When the Europeans sought to
          remake South Africa according to their own vision, they used
          Christianity as a primary means of reshaping its people. Patricia’s
          Christian faith is as much a part of who she is as her Xhosa heritage,
          though the former was imposed on her people by the government. Young
          Trevor points out that if it weren’t for the church, his family would
          not have been in such a dangerous situation in the first place. This
          proclamation highlights his critical thinking and foreshadows the
          businessman that he will become as a young man.
          <br />
          <br />
          Patricia looks to her faith for direction in every aspect of her life,
          but it is evident that she is not likewise beholden to the laws
          limiting South Africans. When she decides that she wants a child, she
          brings to the task the same perseverance and ability to circumvent the
          law that she used to achieve her professional goals. She knows the
          risk involved with having a mixed-race child but nonetheless persuades
          a Swiss man to give her one. Her pregnancy is the result of deliberate
          planning and is a testament to her resolve and powers of persuasion.
          Ironically, the same level of devotion Patricia applies to the divine
          is seen in her devotion to navigating and evading human laws.
          <br />
          <br />
          Noah describes how the Afrikaners removed people from their native
          lands as one way of oppressing them and frames Patricia’s choice to
          remain in her country at all costs as an act of defiance as bold as
          her decision to have a racially mixed child. Patricia takes Trevor to
          Soweto to visit her family because, just as her family belongs to her,
          so does her country. There is no risk so great that it would push
          Patricia to consider leaving South Africa. Her homeland is as
          essential to her as the devotion she holds to her faith
        </p>
        <h1>Chapter One Themes</h1>
        <p>
          (1) The impact of apartheid on personal identity: This theme explores
          how the apartheid system in South Africa affected Trevor Noah's sense
          of self and his place in society from a young age. It delves into the
          complexities of growing up in a system that categorizes people based
          on race.
          <br />
          <br />
          (2) Family dynamics under an oppressive system: This theme looks at
          how Trevor's family, particularly his relationship with his mother,
          was shaped by the restrictions and dangers of living under apartheid.
          It may explore the unique challenges they faced and the strategies
          they used to cope.
          <br />
          <br />
          (3) The power of language in navigating social boundaries: Trevor Noah
          is known for his ability to speak multiple languages. This theme could
          explore how language became a tool for him to cross social and racial
          boundaries, even as a child.
          <br />
          <br />
          (4) Childhood innocence in a complex world: This theme might examine
          how Trevor, as a child, perceived and interpreted the complex and
          often dangerous world around him, possibly contrasting his innocent
          perspective with the harsh realities of apartheid.
          <br />
          <br />
          (5) The role of religion in shaping perspective: This could explore
          how religious beliefs and practices influenced Trevor's early life and
          worldview, possibly focusing on his mother's strong faith.
        </p>
        <h1>Chapter Two Themes</h1>
        <p>
          (1) The challenges of mixed-race identity: This theme delves into
          Trevor's experiences as a mixed-race child in a society that strictly
          categorizes people by race. It might explore feelings of not belonging
          fully to any one group.
          <br />
          <br />
          (2) Maternal influence and sacrifice: This theme focuses on Trevor's
          relationship with his mother and the sacrifices she made for him. It
          might explore how her choices and strength shaped his life and
          character.
          <br />
          <br />
          (3) Navigating societal expectations and restrictions: This theme
          could examine how Trevor learned to navigate the complex rules and
          expectations of apartheid society, both written and unwritten.
          <br />
          <br />
          (4) The contrast between public and private life: This might explore
          the differences between how Trevor and his family had to present
          themselves in public versus how they lived in private, highlighting
          the strain of living under apartheid.
          <br />
          <br />
          (5) Education as a tool for empowerment: This theme could look at how
          education, both formal and informal, became a means for Trevor to
          understand his world better and potentially overcome some of the
          limitations placed on him by society.
        </p>
        <button className="cancel" onClick={()=>setShowModal(false)}>Cancel</button>
      </div>
     </div>
    </div>
  );
};
export default Article;