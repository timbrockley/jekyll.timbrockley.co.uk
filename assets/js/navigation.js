function goto_url(url)
{
  if(typeof url !== 'string' || url===''){ return null; }
  window.location.href=url;
}