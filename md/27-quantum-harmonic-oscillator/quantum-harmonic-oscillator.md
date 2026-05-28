The [[classic-harmonic-oscillator]] applies to quantum physics.

$$
\hat{H} = \frac{\hat{p}^2}{2m} + \tfrac{1}{2}m\omega^2\hat{x}^2, \qquad [\hat{x}, \hat{p}] = i\hbar
$$

$$
\boxed{= \tfrac{1}{2}m\omega^2\left(\hat{x}^2 + \frac{\hat{p}^2}{m^2\omega^2}\right)}
$$

This looks like a sum of two squares.
Note that

$$
a^2 + b^2 = (a - ib)(a + ib)
$$

applies to operators

$$
\left(\hat{x} - \frac{i\hat{p}}{m\omega}\right)\left(\hat{x} + \frac{i\hat{p}}{m\omega}\right) = \hat{x}^2 + \frac{\hat{p}^2}{m^2\omega^2} + \frac{i}{m\omega}(i\hbar)
$$

where $[\hat{x},\hat{p}]=i\hbar$ 
Let

$$
\hat{A}^ =\hat{x}-\frac{i\hat{p}}{m\omega}
$$

$$
\hat{A}^\dagger =\hat{x}+\frac{i\hat{p}}{m\omega}
$$

so 

$$
\hat{A}^\dagger\hat{A} = \hat{x}^2 + \frac{\hat{p}^2}{m^2\omega^2} - \frac{\hbar}{m\omega}
$$

We substitute this back into $\hat{H}$

$$
\hat{H} = \tfrac{1}{2}m\omega^2\left(\hat{A}^\dagger\hat{A} + \frac{\hbar}{m\omega}\mathbb{I}\right)
$$

Therefore even if $\hat{A}=0$, then the lower bound for hamiltonian is

$$
\hat{H}=E\geq \frac{1}{2}\hbar \omega
$$

Let

$$
\boxed{\alpha\triangleq \sqrt{\hbar/m\omega}}
$$

so

$$
\hat{A} = \hat{x} + i\,\frac{\alpha^2}{\hbar}\,\hat{p}
$$

$$
= \alpha\left(\frac{\hat{x}}{\alpha} + i\,\frac{\alpha}{\hbar}\,\hat{p}\right)
$$

Let lowering/annihilation operator $\hat{a}$ be

$$
\boxed{\hat{a} \triangleq \frac{1}{a\sqrt{2}}\hat{A} =\frac{1}{\sqrt{2}}\left(\frac{\hat{x}}{\alpha} + i\,\frac{\alpha}{\hbar}\,\hat{p}\right)}
$$

and raising/creation operator be $\hat{a}^\dagger$ 

The $\sqrt{2}$ in the denominator keeps $[\hat{a},\hat{a}^\dagger]=1$
 which is clean

$$
[\hat{a}, \hat{a}^\dagger] = \tfrac{1}{2}\left[\frac{\hat{x}}{\alpha} + i\frac{\alpha}{\hbar}\hat{p}, \frac{\hat{x}}{\alpha} - i\frac{\alpha}{\hbar}\hat{p}\right]
$$

$$
= -\frac{i}{2\hbar}[\hat{x}, \hat{p}] + \frac{i}{2\hbar}[\hat{p}, \hat{x}] = 1
$$

$$
\boxed{[\hat{a}, \hat{a}^\dagger] = 1}
$$

Thus

$$
\hat{a} = \frac{1}{\sqrt{2}}\left(\frac{\hat{x}}{\alpha} + i\frac{\alpha}{\hbar}\hat{p}\right), \qquad \hat{a}^\dagger = \frac{1}{\sqrt{2}}\left(\frac{\hat{x}}{\alpha} - i\frac{\alpha}{\hbar}\hat{p}\right)
$$

Adding them causes the $\hat{p}$ term to cancel

$$
\boxed{\hat{x} = \frac{\alpha}{\sqrt{2}}(\hat{a} + \hat{a}^\dagger)}
$$

Subtracting them causes $\hat{x}$ term to cancel

$$
\boxed{\hat{p} = \frac{\hbar}{i\alpha\sqrt{2}}(\hat{a} - \hat{a}^\dagger)}
$$

where

$$
\hat{H}= \tfrac{1}{2}m\omega^2\left(\hat{x}^2 + \frac{\hat{p}^2}{m^2\omega^2}\right)
$$

$$
=\tfrac{1}{2}m\omega^2\left(\frac{2\hbar}{m\omega}\hat{a}^\dagger\hat{a} + \frac{\hbar}{m\omega}\right)
$$

$$
= \hbar\omega\,\hat{a}^\dagger\hat{a} + \tfrac{1}{2}\hbar\omega
$$

$$
= \hbar\omega\left(\hat{N} + \tfrac{1}{2}\right)
$$

where [[number-operator|number operator]]  $\hat{N}$

$$
\boxed{\hat{N}=\hat{a}^\dagger\hat{a}}
$$

Note from [[ladder-of-states]] that 

$$
N_E=\frac{E}{\hbar \omega}-\frac{1}{2}
$$

$N_E$ must be a non-negative integer -- the chain reaches $\ket{0}$ after $N_E$ steps.

If $N_E$ is not a int then subtracting will never get to zero and overshoot to a negative decimal number. 
$$\braket{E_-|E_-}=-0.3<0$$
is not possible because norm squared are always $\geq 0$
