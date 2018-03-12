// https://api.github.com/graphql

$(document).ready(() => {
  const githubKey = loadLocalStorage().github.accessToken;
  $('#github-submit').click((event) => {
    event.preventDefault();
    // const url = `https://api.github.com/repos/slledru/unit21-checkpoint/issues?access_token=${githubKey}`;
    // const url = `https://api.github.com/user/repos?access_token=${githubKey}&page=1&per_page=100`
// e871addd291b602f09463e1ce177035c4fd7f05b
// const url = `https://api.github.com/users/slledru/repos?access_token=${githubKey}&page=1&per_page=100`
    const url = `https://api.github.com/users/slledru/repos?access_token=${githubKey}`
    $xhr = $.ajax({
      url: url,
      type: 'GET',
      accepts: {
        'Accept': 'application/vnd.github.v3+json'
      },
      // dataType: 'vnd.github.v3+json',
      crossDomain: true,
      statusCode: {
        404: function() {
          console.log( "page not found" );
        }
      }
    });
    console.log($xhr);
    $xhr.done((data, textStatus, jqXHR ) => {
      console.log(data);
      if (Array.isArray(data.results)) {

      }
    }).fail((data, textStatus, jqXHR ) => {
      console.log(data);
      console.log(`fail ${data}===${textStatus}===${jqXHR}`);
    })




  });
});

/*
query {
  repository(owner:"slledru", name:"unit21-checkpoint") {
    description
    issues(last:20) {
      edges {
        node {
          title
          url
          labels(first:5) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
}
*/

const query =
`query {
  repository(name: "unit21-checkpoint", owner: "slledru") {
    ref(qualifiedName: "master") {
      target {
        ... on Commit {
          id
          history(first: 5) {
            pageInfo {
              hasNextPage
            }
            edges {
              node {
                messageHeadline
                oid
                message
                author {
                  name
                  email
                  date
                }
              }
            }
          }
        }
      }
    }
  }
}`;
