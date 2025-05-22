function Component() {
  const parallax = useParallax({
    speed: -10,
  });
  return <div ref={parallax.ref} />;
}