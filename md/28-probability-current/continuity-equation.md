
Look at [[flow-of-probability]] 

We can intergrate the wave function to get the total probability that a wave is within between $x=a$ and $x=b$

$$
P(a,b) = \int_a^b |\psi(x,t)|^2\,dx
$$

We integrate

$$
\frac{dP(a,b)}{dt} = \int_a^b \frac{\partial}{\partial t}|\psi|^2\,dx = -\int_a^b \frac{\partial J}{\partial x}\,dx
$$

$$
= -\big[J(b,t) - J(a,t)\big] = J(a,t) - J(b,t)
$$

hence

$$
\boxed{\frac{dP(a,b)}{dt}=J(a,t)-J(b,t)}
$$

so that means in a stionary state which doesn't depend on time, the change in probability $\frac{dP(a,b)}{dt}=0$ so

$$
J(a,t) = J(b,t)
$$

So $j$ is constant everywhere in a [[stationary-states]]

In 3D,

$$
\boxed{\frac{\partial \rho}{\partial t} = -\nabla\cdot\vec{J}}
$$