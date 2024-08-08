// 이번 주차의 문제는 아래의 코드를 async/await 로 리팩토링 하기 입니다.
/**
 * - 코드 이해하기
    1. 먼저 콘솔에 위의 코드를 입력하고 엔터를 입력해주세요
    2. 해당 코드는 애니메이션 제목을 입력하면, 해당 애니메이션의 캐릭터와 명대사를 출력해주는 코드입니다.
    3. '애니메이션 제목을 입력하세요.'에 나루토를 입력하면.. 
    4. 다음과 같이 결과가 나옵니다.
        daily.dev | The Homepage Developers Deserve
        Itachi Uchiha: Self-sacrifice... A nameless shinobi who protects peace within its shadow. That is true shinobi..
    5. 먼저 fetch() 함수는 지금은 browser에서 네트워크 통신을 할 수 있도록 해두는 함수라고만 이해하시면 좋을 것 같습니다. “네트워크 통신”이므로 결과로 프로미스를 반환하는 대표적인 함수 입니다.
    6. 그걸 감싼 loadJson() 함수는 아주 간단하게, url을 입력받아 fetch 함수를 호출해주고, 그 통신이 성공했을 때(statusCode 200), 결과를 반환해주는 함수입니다. 
    7. 만약 통신이 실패하는 경우 위에 작성한(지금은 이해 못하셔도 상관없습니다) 에러 객체를 반환해줍니다.
    8. 그리고 아래의 코드에서, loadJson() 함수의 결과를 받아, 결과값을 화면에 띄워주는 일을 하고 있습니다.

    function narutoIsNotOtaku() {
        let title = prompt("애니메이션 제목을 입력하세요.", "naruto");

        return loadJson(`https://animechan.xyz/api/random/anime?title=${title}`)
            .then((res) => {
            alert(`${res.character}: ${res.quote}.`);
            return res;
            })
            .catch((err) => {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("일치하는 애니메이션이 없습니다. 일반인이시면 naruto, onepiece 정도나 입력해주세요!");
                return narutoIsNotOtaku();
            } else {
                throw err;
            }
        });
    }
 * 
 */

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new HttpError(response);
    }
  });
}

function narutoIsNotOtaku() {
  let title = prompt("애니메이션 제목을 입력하세요.", "naruto");

  return loadJson(`https://animechan.xyz/api/random/anime?title=${title}`)
    .then((res) => {
      alert(`${res.character}: ${res.quote}.`);
      return res;
    })
    .catch((err) => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("일치하는 애니메이션이 없습니다. 일반인이시면 naruto, onepiece 정도나 입력해주세요!");
        return narutoIsNotOtaku();
      } else {
        throw err;
      }
    });
}

narutoIsNotOtaku();
