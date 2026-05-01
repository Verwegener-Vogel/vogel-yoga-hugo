export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === '/.well-known/mta-sts.txt') {
      const policy = `version: STSv1
mode: enforce
mx: smtp.google.com
mx: aspmx.l.google.com
mx: alt1.aspmx.l.google.com
mx: alt2.aspmx.l.google.com
mx: alt3.aspmx.l.google.com
mx: alt4.aspmx.l.google.com
max_age: 604800
`;
      return new Response(policy, {
        headers: { "Content-Type": "text/plain" },
      });
    }
    return new Response("Not Found", { status: 404 });
  },
};
