function printMovieReview({ title, releaseYear, reviewers }) {
  console.log(`제목 : ${title}`);
  console.log(`개봉 : ${releaseYear}`);
  const [firstReviewer = "리뷰어 미정"] = reviewers;
  console.log(`첫 번째 리뷰어 : ${firstReviewer}`);
}

printMovieReview({
  title: "오펜하이머",
  releaseYear: 2023,
  reviewers: ["이정환", "김효빈", "김고은"],
});

// 출력 결과 :
// 제목 : 오펜하이머
// 개봉 : 2023
// 첫 번째 리뷰어 : 이정환

printMovieReview({
  title: "웡카",
  releaseYear: 2024,
  reviewers: [],
});

// 출력 결과 :
// 제목 : 웡카
// 개봉 : 2024
// 첫 번째 리뷰어 : 리뷰어 미정

function printAvgScore(students) {
  for (let name in students) {
    let sum = 0;
    const { scores } = students[name];

    for (let score of scores) {
      sum += score;
    }
    const avg = sum / scores.length;
    console.log(`${name}: ${avg}`);
  }
}

printAvgScore({
  이정환: { hobby: "테니스", scores: [10, 20, 30, 40, 50] },
  김효빈: { hobby: "테니스", scores: [90, 80, 30, 70, 50] },
  홍길동: { hobby: "의적", scores: [100, 100, 20, 20, 50] },
});

// 출력 결과 :
// 이정환: 30
// 김효빈: 64
// 홍길동: 58
